import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RadialBarChart, RadialBar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaHeartbeat, FaInfoCircle } from 'react-icons/fa';
function PredictionPage() {
  // --- 1. STATE MANAGEMENT ---
  // Menyediakan semua field wajib sesuai dengan skema JSON API kamu
  const [formData, setFormData] = useState({
    age: '',
    sex: '1', 
    cp: '3',  
    trestbps: '', 
    chol: '240',    // Nilai default/rata-rata agar user tidak input terlalu banyak di awal
    fbs: '0', 
    restecg: '1', 
    thalach: '', 
    exang: '0', 
    oldpeak: '1.0', 
    slope: '1', 
    ca: '0', 
    thal: '3'
  });

  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // --- 2. FUNGSI HANDLER ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPredictionData(null);
    setErrorMessage('');

    // Menggunakan URL sesuai dengan log lokal kamu
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      // Konversi tipe data string dari form menjadi tipe data yang tepat (Int/Float)
      const formattedData = {
        age: parseInt(formData.age) || 0,
        sex: parseInt(formData.sex),
        cp: parseInt(formData.cp),
        trestbps: parseInt(formData.trestbps) || 0,
        chol: parseInt(formData.chol) || 0,
        fbs: parseInt(formData.fbs),
        restecg: parseInt(formData.restecg),
        thalach: parseInt(formData.thalach) || 0,
        exang: parseInt(formData.exang),
        oldpeak: parseFloat(formData.oldpeak) || 0.0,
        slope: parseInt(formData.slope),
        ca: parseInt(formData.ca),
        thal: parseInt(formData.thal)
      };
      
      // Dibungkus array [ ] karena API kamu menerima List data pasien
      const payload = [formattedData]; 

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Gagal memproses data. Pastikan semua angka valid.');
      }

      const result = await response.json();
      
      // Membaca response baru kamu: result.predictions[0]
      if (result.predictions && result.predictions.length > 0) {
        const dataPasien = result.predictions[0];
        
        // Membersihkan karakter '%' dari string "46.42%" menjadi float 46.42
        const sakitPercent = parseFloat(dataPasien.probabilitas_sakit.replace('%', ''));
        const sehatPercent = 100 - sakitPercent;

        setPredictionData({
          resultCode: dataPasien.hasil_prediksi, // 0 atau 1
          statusText: dataPasien.status,        // "Sehat" atau "Sakit"
          probabilitasSakit: sakitPercent,
          probabilitasSehat: sehatPercent,
        });
      }

    } catch (error) {
      console.error('Prediction error:', error);
      setErrorMessage('Terjadi kesalahan koneksi atau format data tidak valid.');
    } finally {
      setIsLoading(false);
    }
  };

  // --- 3. DATA GRAFIK ---
  const gaugeData = [
    {
      name: 'Sakit',
      value: predictionData ? predictionData.probabilitasSakit : 0,
      fill: (predictionData && predictionData.resultCode === 1) ? '#e11d48' : '#f43f5e', 
    }
  ];

  const trendData = [
    { time: 'Mulai', Sakit: 20, Sehat: 80 },
    { time: 'Analisis', Sakit: predictionData ? predictionData.probabilitasSakit : 40, Sehat: predictionData ? predictionData.probabilitasSehat : 60 },
  ];

  return (
    <div className="min-h-screen bg-dark-red text-white pt-28 pb-16 px-6 md:px-20 relative">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink/10 border border-pink/30 text-pink text-xs font-semibold uppercase tracking-widest mb-3">
            AI Cardiac Expert
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            Prediksi Risiko <span className="text-pink">Jantung API</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,2fr] gap-10">
          
          {/* FORMULIR INPUT */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Data Vital Kesehatan</h3>
              
              <InputGroup label="Usia (Tahun)" name="age" type="number" value={formData.age} onChange={handleInputChange} placeholder="Contoh: 45" required />
              <InputGroup label="Tekanan Darah Istirahat (trestbps)" name="trestbps" type="number" value={formData.trestbps} onChange={handleInputChange} placeholder="Contoh: 110" required />
              <InputGroup label="Detak Jantung Maksimal (thalach)" name="thalach" type="number" value={formData.thalach} onChange={handleInputChange} placeholder="Contoh: 132" required />

              <SelectGroup label="Jenis Kelamin" name="sex" value={formData.sex} onChange={handleInputChange}>
                <option value="1">Laki-laki</option>
                <option value="0">Perempuan</option>
              </SelectGroup>

              <SelectGroup label="Tipe Nyeri Dada (cp)" name="cp" value={formData.cp} onChange={handleInputChange}>
                <option value="3">Asymptomatic (Tipe 3)</option>
                <option value="2">Non-anginal Pain (Tipe 2)</option>
                <option value="1">Atypical Angina (Tipe 1)</option>
                <option value="0">Typical Angina (Tipe 0)</option>
              </SelectGroup>

              <InputGroup
                label="Kolesterol (chol)"
                name="chol"
                type="number"
                value={formData.chol}
                onChange={handleInputChange}
                placeholder="Contoh: 240"
                required
              />

              <SelectGroup
                label="Fasting Blood Sugar (fbs)"
                name="fbs"
                value={formData.fbs}
                onChange={handleInputChange}
              >
                <option value="0">≤ 120 mg/dl</option>
                <option value="1">{">"} 120 mg/dl</option>
              </SelectGroup>

              <SelectGroup
                label="Resting ECG (restecg)"
                name="restecg"
                value={formData.restecg}
                onChange={handleInputChange}
              >
                <option value="0">Normal</option>
                <option value="1">ST-T Abnormality</option>
                <option value="2">Left Ventricular Hypertrophy</option>
              </SelectGroup>

              <SelectGroup
                label="Exercise Induced Angina (exang)"
                name="exang"
                value={formData.exang}
                onChange={handleInputChange}
              >
                <option value="0">Tidak</option>
                <option value="1">Ya</option>
              </SelectGroup>

              <InputGroup
                label="Oldpeak"
                name="oldpeak"
                type="number"
                step="0.1"
                value={formData.oldpeak}
                onChange={handleInputChange}
                placeholder="Contoh: 1.5"
                required
              />

              <SelectGroup
                label="Slope"
                name="slope"
                value={formData.slope}
                onChange={handleInputChange}
              >
                <option value="0">Upsloping</option>
                <option value="1">Flat</option>
                <option value="2">Downsloping</option>
              </SelectGroup>

              <SelectGroup
                label="Jumlah Pembuluh (ca)"
                name="ca"
                value={formData.ca}
                onChange={handleInputChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </SelectGroup>

              <SelectGroup
                label="Thal"
                name="thal"
                value={formData.thal}
                onChange={handleInputChange}
              >
                <option value="0">Unknown</option>
                <option value="1">Normal</option>
                <option value="2">Fixed Defect</option>
                <option value="3">Reversible Defect</option>
              </SelectGroup>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full py-4 bg-pink text-dark-red font-extrabold text-lg rounded-full text-center hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-60"
              >
                {isLoading ? 'Mengirim ke AI Model...' : 'MULAI PREDIKSI AI'}
              </button>
            </form>
          </div>

          {/* HASIL & GRAFIK */}
          <AnimatePresence>
            {(isLoading || predictionData !== null || errorMessage) && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                
                {isLoading && (
                  <div className="text-center p-12 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center gap-4">
                    <FaHeartbeat className="w-12 h-12 text-pink animate-pulse" />
                    <p className="text-white/80">Menghubungi server Machine Learning...</p>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-6 bg-red-950/70 rounded-2xl border border-red-800 flex items-center gap-3 text-red-200">
                    <FaInfoCircle className="text-red-400" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {predictionData && !isLoading && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Hasil Status Utama */}
                    <div className={`md:col-span-2 p-6 rounded-2xl border ${predictionData.resultCode === 1 ? 'bg-red-950/60 border-red-700' : 'bg-green-950/60 border-green-700'}`}>
                      <h4 className="text-lg font-bold uppercase tracking-wide">Diagnosis: <span className="underline">{predictionData.statusText}</span></h4>
                      <p className="text-sm mt-1 text-white/90">
                        {predictionData.resultCode === 1 
                          ? 'Sistem mendeteksi probabilitas risiko tinggi. Disarankan untuk segera melakukan konsultasi medis.' 
                          : 'Hasil analisis aman. Tetap jaga kestabilan aktivitas fisik dan pola diet harian.'}
                      </p>
                    </div>

                    {/* Grafik Radial Meter */}
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-pink mb-2">Probabilitas Sakit</h4>
                      <ResponsiveContainer width="100%" height={180}>
                        <RadialBarChart cx="50%" cy="50%" innerRadius="75%" outerRadius="100%" barSize={12} data={gaugeData} startAngle={180} endAngle={0}>
                          <RadialBar background clockWise dataKey="value" cornerRadius={10} />
                          <text x="50%" y="60%" textAnchor="middle" className="text-3xl font-black" fill="white">
                            {predictionData.probabilitasSakit}%
                          </text>
                        </RadialBarChart>
                      </ResponsiveContainer>
                      <div className="flex gap-6 text-xs mt-2">
                        <span className="flex items-center gap-1.5 text-red-400"><span className="w-2.5 h-2.5 bg-red-600 rounded-full"/>Sakit: {predictionData.probabilitasSakit}%</span>
                        <span className="flex items-center gap-1.5 text-green-400"><span className="w-2.5 h-2.5 bg-pink rounded-full"/>Sehat: {predictionData.probabilitasSehat.toFixed(2)}%</span>
                      </div>
                    </div>

                    {/* Grafik Garis (Trend) */}
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Grafik Garis Komparasi</h4>
                      <ResponsiveContainer width="100%" height={160}>
                        <LineChart data={trendData}>
                          <XAxis dataKey="time" stroke="#ffffff" fontSize={11} />
                          <YAxis domain={[0, 100]} hide />
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <Tooltip contentStyle={{ backgroundColor: '#1f1f1f', border: 'none', borderRadius: '8px' }} />
                          <Line type="monotone" dataKey="Sakit" stroke="#dc2626" strokeWidth={3} />
                          <Line type="monotone" dataKey="Sehat" stroke="#f43f5e" strokeWidth={3} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Sub-komponen Input Form
const InputGroup = ({ label, ...props }) => (
  <div className="flex flex-col space-y-1.5">
    <label className="text-xs font-bold uppercase text-white/70 tracking-wider">{label}</label>
    <input {...props} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-pink/50 text-sm" />
  </div>
);

const SelectGroup = ({ label, children, ...props }) => (
  <div className="flex flex-col space-y-1.5">
    <label className="text-xs font-bold uppercase text-white/70 tracking-wider">{label}</label>
    <div className="relative">
      <select {...props} className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white appearance-none focus:outline-none focus:border-pink/50 text-sm cursor-pointer">
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-white/40">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
      </div>
    </div>
  </div>
);

export default PredictionPage;