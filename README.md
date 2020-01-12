# wapd-backend

為男裝服飾打造的 Vue.js/Node.js Express 前後端分離專案，採用 MySQL 作為資料庫，此為後端伺服器並仍處於開發階段，伺服器已布署於 [heroku](https://wapd-backend.herokuapp.com/api/) 上，您可以 [在此看見](https://newman0934.github.io/wapd-frontend/#/index) 開發中前端網頁目前的成品。

## 資料庫架構

關於 ERD，可參考[資料庫架構規劃](https://drive.google.com/file/d/1TCItglC5sX0VC8NGjZSR_zfzqQeeoraD/view)

## 安裝

此專案以 Node.js/Express 搭配 MySQL 作為資料庫，安裝本地版本前請確保您已安裝了 MySQL workbench, sequelize-cli 以及 npm。

在本地開啟終端機，輸入

```
https://github.com/newman0934/wapd-backend.git
```

安裝所需套件，請輸入

```
npm install
```

本專案使用了 dotenv 隱藏了部分敏感資訊，若要完整跑起伺服器，請確保您已準備了以下所需：

```
# JWT_SECRET: JWT SECRET(e.g. secret)
JWT_SECRET=
# EMAIL: 信箱帳號密碼，務必輸入正確
EMAIL_ACCOUNT=
EMAIL_PASSWORD=
# URL: 上線用的URL，可用 ngrok 仿一個
URL=
# 藍新商店代號及金鑰
MERCHANT_ID=
HASH_KEY=
HASH_IV=
# IMGUR API 金鑰
IMGUR_CLIENT_ID=
```

於根目錄開啟 config/config.json，確保您在 MySQL workbench 中的設定檔與 config.json 中相符。

```
{
  "development": {
    "username": "root",
    "password": 您資料庫的密碼,
    "database": "wapd_backend",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
//...
```

於 MySQL workbench 中建立 wapd_backend 及測試用 wapd_backend_test 資料庫，並於專案根目錄中建立 migration。輸入：

```
npx sequelize db:migrate
npx sequelize db:migrate --env test
```

建立種子檔案，請輸入：

```
npx sequelize db:seed:all
npx sequelize db:seed:all --env test
```

啟動伺服器，請輸入：

```
npm run dev
```

進行自動化測試，請輸入：

## API 文件

若要查看 API 文件，可於本地 /api-docs 觀看，或是於 [heroku](https://wapd-backend.herokuapp.com/api-docs/) 觀看

## 專案分工

前端開發

[Caesar Wang](https://github.com/newman0934)

[YunYuLo](https://github.com/YunYuLo)

後端開發

[Eason Lin](https://github.com/EasonLin0716)

此專案仍處於開發階段， 2020 年 1 月下旬初版釋出後會完善這份文件。若您對這份專案有任何更好的建議，請不吝聯繫我們，謝謝您
