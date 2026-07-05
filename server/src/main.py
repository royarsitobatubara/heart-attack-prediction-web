from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import joblib
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_methods = ["*"],
    allow_credentials = True,
    allow_headers = ["*"]
)
MODEL_PATH = r"D:\heart attack-ML project\server\model\model_heart_attack_prediction.pkl"

try:
    model = joblib.load(MODEL_PATH)
    print(f"=== MODEL BERHASIL DIMUAT dari {MODEL_PATH} ===")
except FileNotFoundError:
    print(f"CRITICAL ERROR: File model TIDAK ditemukan di lokasi: {MODEL_PATH}")
    model = None

class PasienData(BaseModel):
    age: int
    sex: int
    cp: int
    trestbps: int
    chol: int
    fbs: int
    restecg: int
    thalach: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int

@app.get("/")
def test():
    return {
        "Status": "success",
        "data": "Hello World"
    }

@app.post("/heart_attack")
def heart_attack(pasien_list: List[PasienData]):
    if model is None:
        raise HTTPException(
            status_code=503, 
            detail="Model ML belum terload di server. Periksa path file .pkl pada server."
        )
        
    try:
        data_dict = [pasien.dict() for pasien in pasien_list]
        df_input = pd.DataFrame(data_dict)
        prediksi = model.predict(df_input)
        probabilitas = model.predict_proba(df_input)
        hasil_respon = []
        for i in range(len(df_input)):
            hasil_respon.append({
                "id_pasien": i + 1,
                "hasil_prediksi": int(prediksi[i]),
                "status": "Terindikasi Sakit Jantung" if prediksi[i] == 1 else "Sehat",
                "probabilitas_sakit": f"{probabilitas[i][1] * 100:.2f}%"
            })
            
        return {
            "Status": "success",
            "total_data": len(hasil_respon),
            "predictions": hasil_respon
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))