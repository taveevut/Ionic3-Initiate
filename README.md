# การเขียนโปรแกรมบนอุปกรณ์สื่อสารไร้สาย Smart Phone-Hybrid Apps

> เป็นตัวอย่างเอาไว้ศึกษาการใช้งาน ionic framework v3 และสามารถนำโค้ดมาดูย้อนหลังไว้เป็นกรณีศึกษาได้

<p align="center">
  <img src="/documents/images/github-banner.jpg">
</p>

- สร้างหน้า Profile //สร้างหน้าเพื่อเรียนรู้การกาหนดรูปแบบแตะละหน้าด้วย CSS
- สร้างหน้า Camera // สร้างหน้าเพื่อเรียนรู้การใช้งาน Plugin Camera
- สร้างหน้า QR Code //สร้างหน้าเพื่อเรียนรู้การใช้งาน QrCodeScan (Create & Scan) 
- สร้างหน้า News //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ GET (การดึงข่าวสารมาแสดง)
- สร้างหน้า Course //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ GET (การดึงคอส์สเรียนมาแสดง)
- สร้างหน้า Todos//สร้างหน้าเพื่อเรียนรู้การใช้งาน Local Storage
- สร้างหน้า Login //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ POST (Login Page)
- สร้างหน้า Register //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ POST (Register Page)
- สร้างหน้า Youtube //สร้างหน้าเพื่อเรียนรู้การใช้งาน Youtube Ifram
- การนำ [Font Awesome](https://fontawesome.com/v4.7.0/) มาประยุคใช้งานกับ ionic Framwork

# เตรียมเครื่องมือสำหรับพัฒนา
  - [การติดตั้ง VS Code และ Extensions](/documents/vscode.md)
  - [การติดตั้ง Node.js, npm และ VisualStudio Code](/documents/nodejs.md)
  - [ติดตั้ง JDK (Java Development Kit )](/documents/jdk_install.md)
  - [Android Studio and SDK tools](https://dl.google.com/dl/android/studio/install/3.1.4.0/android-studio-ide-173.4907809-windows.exe)
  - [การตั้งค่า Environment PATH](/documents/environment_path.md)
# ขั้นตอนการติดตั้ง
- clone project
```sh
$ git clone </path/to/repository>
```

- Reload Package.json
```sh
$ npm install
```

# ionic Framwork - คำสั่งที่ใช้งานบ่อย
- การสร้างโปรเจคใหม่
```sh
$ ionic start <ชื่อโปรเจค> <template blank|sidemenu|tabs>
```

- การสั่งรัน Application ไปที่ Browser แล้วกด Enter `หากต้องการยกเลิกคาสั่งรัน Application ให้กดปุ่ม Ctrl + C`
```sh
$ ionic serve
```

- การสร้างหน้าใหม่(New Page)
```sh
$ ionic g page <ชื่อหน้า> --no-module
```

- เพิ่ม Platforms ที่เราต้องการ Build
```sh
$ ionic cordova platform add <ชื่อเพลตฟอม : android|ios>
```

> Note: การเพิ่ม platform ถ้าเป็น android เราต้องติดตั้ง 
> Android Studio และต้องติดตั้ง Android SDK ก่อน

- ปรับปรุง resources
```sh
$ ionic cordova resources <ชื่อเพลตฟอม : android|ios>
```

- Build App
```sh
$ ionic cordova build <ชื่อเพลตฟอม : android|ios>
```

- Build on device
```sh
$ ionic cordova run <ชื่อเพลตฟอม : android|ios> --device
```

# การสร้างไฟล์ APK สำหรับนำขึ้น Android PlayStore
- Build App
```sh
$ ionic cordova build <ชื่อเพลตฟอม : android|ios> --prod --release
```

- สร้างไฟล์ KeyStore
```sh
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

- Signed App
```sh
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

- Zipalign
> 1. เข้าไปที่ zipalign ซึ่งจะอยู่ใน  `Library/Android/sdk/build-tools/28.0.2`
> 2. จากนั้นให้ใช้คำสั่ง `./zipalign -v 4 /Users/taveevut/Desktop/ionic3-starter/platforms/android/build/outputs/apk/android-release-unsigned.apk android-release.apk`
> 3. เมื่อเสร็จสิ้นแล้วเราก็จะได้ไฟล์ `android-release.apk ` อยู่ในโฟล์เดอร์โปรเจคเราและเป็นไฟล์ที่พร้อมจะนำขึ้นไปยัง AppStore ของเรา

> ดูข้อมูลเพิ่มเติมได้ที่ https://ionicframework.com/docs/v1/guide/publishing.html

### นำขึ้น Android PlayStore

- https://www.youtube.com/watch?v=1leOrcJbfng
- https://www.youtube.com/watch?v=7A2J7gDKIUs
- https://www.youtube.com/watch?v=uFwHFLBZBvk


<br>
<br>

---
<p align="center"> จัดทำโปรแกรมคอมพิวเตอร์พัฒนาระบบงานธุรกิจส่วนตัวและหน่วยงาน ใส่ใจคุณภาพ คุ้มราคา ส่งงานตรงเวลา<br>ติดต่อ 086-288-7987 (ท็อป) หรืออีเมล์    nakomah.web@gmail.com<br>ติดตามผลงานได้ที่ <a href="https://nakomah.com" target="_blank">www.nakomah.com</a></p>