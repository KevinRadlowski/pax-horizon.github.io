# 🚀 Solution : Configurer un Reverse Proxy avec Nginx pour Activer HTTPS sur BlueMap  
Puisque **BlueMap ne supporte pas HTTPS**, on va utiliser **Nginx comme reverse proxy** pour **forcer HTTPS avec Let's Encrypt**.

---

## ✅ 1️⃣ Installer Nginx sur ton serveur
Si ton serveur tourne sous **Ubuntu/Debian**, installe **Nginx** avec :
```bash
sudo apt update
sudo apt install nginx -y
```
**Vérifie que Nginx est bien installé** :
```bash
nginx -v
```
Tu devrais voir quelque chose comme :
```
nginx version: nginx/1.18.0 (Ubuntu)
```

---

## ✅ 2️⃣ Configurer le Reverse Proxy Nginx
On va créer un **fichier de configuration pour BlueMap**.

📌 **1. Ouvre le fichier de configuration Nginx** :
```bash
sudo nano /etc/nginx/sites-available/bluemap
```
📌 **2. Ajoute cette configuration :**
```nginx
server {
    listen 80;
    server_name ton-domaine.com;

    location / {
        proxy_pass http://127.0.0.1:60199;  # Adresse locale où tourne BlueMap
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

📌 **3. Enregistre et ferme (`Ctrl + X` puis `Y` et `Entrée`)**.

📌 **4. Active la configuration** :
```bash
sudo ln -s /etc/nginx/sites-available/bluemap /etc/nginx/sites-enabled/
```

📌 **5. Recharge Nginx** :
```bash
sudo systemctl reload nginx
```

---

## ✅ 3️⃣ Installer un certificat SSL gratuit avec Let's Encrypt
On va sécuriser la connexion avec **Let's Encrypt** et **Certbot**.

📌 **1. Installe Certbot et le plugin Nginx** :
```bash
sudo apt install certbot python3-certbot-nginx -y
```

📌 **2. Génère un certificat SSL** :
```bash
sudo certbot --nginx -d ton-domaine.com
```

📌 **3. Certbot va automatiquement configurer HTTPS sur Nginx !**  

📌 **4. Vérifie que tout fonctionne** :
```bash
sudo systemctl restart nginx
```

---

## ✅ 4️⃣ Accéder à BlueMap via HTTPS
Maintenant, ta carte Minecraft est accessible via :
```
https://ton-domaine.com
```
🎯 **L’URL d'intégration dans ton site Angular devient :**
```html
<iframe src="https://ton-domaine.com"
        width="100%" height="600px" frameborder="0" allowfullscreen>
</iframe>
```

---

## 🎯 Conclusion
| 🛠️ Solution | ⚡ Facilité | ✅ Avantages | ❌ Inconvénients |
|-------------|------------|-------------|----------------|
| **Bouton vers la carte (sans HTTPS)** | ✅ Facile | Pas besoin de configurer un serveur | ❌ Pas d'intégration directe |
| **Reverse Proxy avec Nginx + Let's Encrypt** | 🔥 Moyen | ✅ HTTPS activé, tout fonctionne | ❌ Besoin d'un serveur avec Nginx |

🔥 **Meilleure solution :** **Mettre en place Nginx + Let's Encrypt pour un accès HTTPS**.  
Si vous avez besoin d'aide pour cette configuration, dites-moi où ça bloque ! 🚀🎨
