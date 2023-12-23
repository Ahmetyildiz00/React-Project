import React from 'react';
import './App.css';

export default function App() {
  const bio=["Doğum Tarihi: 17.09.2001", "Doğum Yeri: Selçuklu/Konya", "Email: ahmetyldz523603@gmail.com", "Linkedin: https://www.linkedin.com/in/ahmet-yıldız-9082b722b/"," Github: https://github.com/Ahmetyildiz00"]
  const hobies=["Fitness", "Dövüş Sanatları", "Bilgisayar Oyunları", "Yazılım"]
const isActive= true
  return (
    <div>
     <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>Ahmet Yıldız</h1>
  <h5>React İle Hazırladığım Blog Siteme Hoş Geldiniz</h5> 
</div>
  
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"#8b4726":"orange"}`}}>Hakkımda</h3>
      <ul style ={{listStyle:"none"}}>
        {bio.map((user,index)=><li key={index}>{user}</li>)}
      </ul> 
        
        </div>
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"#8b4726":""}`}} >İlgi Alanlarım</h3>
      <ul>
        {hobies.map((user,index)=><li key={index}>{user}</li>)}
      </ul> 
    </div>
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"#8b4726":"orange"}`}} >Ben Kimim ?</h3>
      <p>Ben Konya Gıda ve Tarım Üniversitesi'nde bilgisayar mühendisliği 2. sınıf öğrencisiyim. Yazılımda kendimi geliştirmek ve daha iyi yerlere gelmek istiyorum. Bu sebepten ötürü Üretken Akademi'nin eğitimine başvurdum ve eğitimi almaya hak kazandım. Şu anda HTML, CSS, JavaScript ve React eğitimlerini alıyorum.</p>        
    </div>
  </div>
</div>
    </div>
  )
}
