# การติดตั้ง Git 

  - Windows ดาวน์โหลดตัวติดตั้งได้จาก https://git-scm.com/downloads
  - Mac OS X Yosemite or later ติดตั่งผ่าน Terminal ให้พิมพ์ `$ git version`
  - Linux ติดตั่งผ่าน Terminal ให้พิมพ์ `$ sudo apt-get install git`

## Git Configurations
ก่อนจะเริ่มใช้งาน Git ได้นั้น จำเป็นต้องตั้งค่าการใช้งานเบื้องต้นก่อน ในบทความนี้จะใช้โปรแกรม Git Bash ที่ติดตั้งมาพร้อม Git for Windows
 - ตั้งชื่อผู้ใช้งาน "user.name"
```sh
  $ git config --global user.name "Taveevut Nakomah"
```

 - ตั้งอีเมลของผู้ใช้งาน "user.email"
```sh
  $ git config --global user.email "nakomah.web@gmail.com"
```

 - ตรวจสอบว่าที่ตั้งค่าถูกต้องหรือไม่
 ```sh
 $ git config --global --list
 ```
> ###  ผลลัพท์
> user.name=Taveevut Nakomah <br> 
> user.email=nakomah.web@gmail.com

หรือ

``` sh
$ cat ~/.gitconfig
```
> ###  ผลลัพท์
> [user] <br> 
> user.name=Taveevut Nakomah <br> 
> user.email=nakomah.web@gmail.com

<br>
<br>

---
<p align="center"> จัดทำโปรแกรมคอมพิวเตอร์พัฒนาระบบงานธุรกิจส่วนตัวและหน่วยงาน ใส่ใจคุณภาพ คุ้มราคา ส่งงานตรงเวลา<br>ติดต่อ 086-288-7987 (ท็อป) หรืออีเมล์    nakomah.web@gmail.com<br>ติดตามผลงานได้ที่ <a href="https://nakomah.com" target="_blank">www.nakomah.com</a></p>
