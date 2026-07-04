import joblib
import pandas as pd

# 1. Muat kembali model .pkl kamu
try:
    model = joblib.load(r'server\model\model_heart_attack_prediction.pkl')
    print("=== MODEL BERHASIL DIMUAT ===\n")
except FileNotFoundError:
    print("Error: File model tidak ditemukan. Pastikan path-nya benar.")
    exit()

data_pasien_baru = {
    'age': [40, 60],
    'sex': [1, 0],
    'cp': [3, 0],       
    'trestbps': [90, 140],
    'chol': [264, 290],
    'fbs': [0, 1],
    'restecg': [1, 0],
    'thalach': [132, 115],
    'exang': [1, 1],
    'oldpeak': [1.2, 2.8],
    'slope': [1, 2],
    'ca': [0, 2],
    'thal': [3, 2]
}

df_test = pd.DataFrame(data_pasien_baru)
prediksi_kelas = model.predict(df_test)
prediksi_probabilitas = model.predict_proba(df_test)
df_test['Hasil_Prediksi'] = prediksi_kelas
df_test['Persentase_Sakit_Jantung'] = [f"{prob[1]*100:.2f}%" for prob in prediksi_probabilitas]
df_test['Status_Kesehatan'] = df_test['Hasil_Prediksi'].map({0: 'Sehat', 1: 'Terindikasi Sakit Jantung'})
print("--- HASIL TESTING DATAFRAME ---")
print(df_test[['age', 'sex', 'Status_Kesehatan', 'Persentase_Sakit_Jantung']])