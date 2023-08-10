# Araç Sepeti.com

## English Below ## 

![Anasayfa 1](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars.png)

![Anasayfa 2](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars2.png)

Araç Sepeti, SOLID prensiplerine bağlı kalınarak ve N-Katmalı mimari yapısıyla C# programlama diline ait; henüz geliştirilme aşamasında olan bir araç kiralama projesidir. Şu anda projenin Angular teknolojisi kullanılarak oluşturulmuş front-end kısmını incelemektesiniz.

:link: ***Projenin back-end kısmına [buradan](https://github.com/hlmclgl/RentaCarProject) ulaşabilirsiniz.***

:package:**Projeye entegre edilen modüller(node_modules)**
  
  - :pushpin:Bootstrap
  
  - :pushpin:Jquery
  
  - :pushpin:ngx-toastr
  
 Angular kullanarak oluşturduğumuz front-end kısmında Models, Services, Components, Pipes,Guards ve Interceptors klasörlerimiz bulunmaktadır. Bu klasörleri yakından inceleyelim:

 <h2>🚀 Demo</h2>

[More Detailed Youtube Video ](https://www.youtube.com/watch?v=gOAvJ5WEXsk&ab_channel=AhmetHilmi%C3%87ilo%C4%9Flu)
 
 ## Models ##
 
 Bu klasör altındaki typescript dosyaları RentaCarProject 'in backend kısmındaki Entities klasöründe bulunan nesnelere karşılık gelmektedir. Bu klasör Back-End den gelen ve Front-End den gönderilen verilerin düzenlenmesi amacıyla oluşturulmuştur. Back-end kısmındaki Entities Layer kısmına [buradan](https://github.com/hlmclgl/RentaCarProject/tree/master/Entities) ulaşabilirsiniz.
 
:open_file_folder: [Models](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/models)
  
  - :page_facing_up:[Brand](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/brand.ts)
  
  - :page_facing_up:[CarDetail](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/carDetail.ts)
  
  - :page_facing_up:[Color](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/color.ts)
  
  - :page_facing_up:[CreditCard](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/creditCard.ts)
  
  - :page_facing_up:[Customer](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/customer.ts)
  
  - :page_facing_up:[CarImage](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/image.ts)
  
  - :page_facing_up:[ListResponseModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/listResponseModel.ts)
  
  - :page_facing_up:[LoginModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/loginModel.ts)
  
  - :page_facing_up:[Payment](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/payment.ts)
  
  - :page_facing_up:[RegisterModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/registerModel.ts)
  
  - :page_facing_up:[Rental](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/rental.ts)
  
  - :page_facing_up:[RentalDetail](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/rentalDetail.ts)
  
  - :page_facing_up:[ResponseModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/responseModel.ts)
  
  - :page_facing_up:[SingleResponseModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/singleResponseModel.ts)
  
  - :page_facing_up:[TokenModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/tokenModel.ts)
  
  - :page_facing_up:[User](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/user.ts)
  
## Services ##

Services klasörü altındaki dosyalarımız back-end de olan WebAPI kısmına istekte bulunmamızı sağlar. WebAPI alınan isteği back-end kısmımızda bulunan operasyonlara iletir ona karşılık bir sonuç gelir. Her bir typescript dosyası WebAPI de ki bir Controllera denk gelmektedir. Back-end kısmındaki WebAPI kısmına [buradan](https://github.com/hlmclgl/RentaCarProject/tree/master/WebAPI) ulaşabilirsiniz. Aşağıdaki bağlantıları kullanarak Services klasörünün detaylarına erişebilirsiniz.
  
:open_file_folder:[Services](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/services)
   
  - :page_facing_up:[AuthService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/auth.service.ts)
  
  - :page_facing_up:[BrandService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/brand.service.ts)
  
  - :page_facing_up:[CarService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/car.service.ts)
  
  - :page_facing_up:[ColorService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/color.service.ts)
  
  - :page_facing_up:[CreditCardService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/credit-card.service.ts)
  
  - :page_facing_up:[CustomerService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/customer.service.ts)
  
  - :page_facing_up:[CarImageService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/image.service.ts)
  
  - :page_facing_up:[LocalStorageService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/local-storage.service.ts)
  
  - :page_facing_up:[PaymentService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/payment.service.ts)
  
  - :page_facing_up:[RentalService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/rental.service.ts)
  
  - :page_facing_up:[UserService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/user.service.ts)
  
  ## Components ##
  
  Back-end kısmızdan gelen operasyon sonuçlarına göre, bu sonuçların son kullanıcıya nasıl iletilmesi gerektiğini düzenlediğimiz kısım bu klasör altındaki dosyalarımızdır. Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.
  
  :open_file_folder: [Components](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components)
  
  :open_file_folder: [Brand](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/brand)
  
  - :page_facing_up:[brand.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/brand/brand.component.html)
  
  - :page_facing_up:[brand.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/brand/brand.component.ts)
  
 :open_file_folder: [CarAdd](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car-add)
 
 - :page_facing_up: [car-add.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-add/car-add.component.html)
 
 - :page_facing_up: [car-add.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-add/car-add.component.ts)
 
 ![araç ekleme](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/caradd.png)
 
  :open_file_folder: [CarFilter](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car-filter)
 
 - :page_facing_up: [car-filter.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-filter/car-filter.component.html)
 
 - :page_facing_up: [car-filter.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-filter/car-filter.component.ts)
 
 ![Carfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/filter.png)
 
 :open_file_folder: [CarUpdate](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car-update)
 
 - :page_facing_up: [car-update.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-update/car-update.component.html)
 
 - :page_facing_up: [car-update.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-update/car-update.component.ts)
 
 ![update](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/update.png)
 
 :open_file_folder: [Cars](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car)
 
 - :page_facing_up: [car.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car/car.component.html)
 
 - :page_facing_up: [car.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car/car.component.ts)
 
 ![cars1](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars.png)
 
 ![cars2](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars2.png)
 
 :open_file_folder: [CarDetail](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/cardetail)
 
 - :page_facing_up: [cardetail.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/cardetail/cardetail.component.html)
 
 - :page_facing_up: [cardetail.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/cardetail/cardetail.component.ts)
 
 ![detail](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/carDetail.png)
 
  :open_file_folder: [Color](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/color)
 
 - :page_facing_up: [color.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/color/color.component.html)
 
 - :page_facing_up: [color.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/color/color.component.ts)
 
 :open_file_folder: [Customer](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/customer)
 
 - :page_facing_up: [customer.component.html](https://github.com/Rental-front-end/blob/master/src/app/components/customer/customer.component.html)
 
 - :page_facing_up: [customer.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/customer/customer.component.ts)
 
 ![customer](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/customers.png)
 
 :open_file_folder: [Footer](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/footer)
 
 - :page_facing_up: [footer.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/footer/footer.component.html)
 
 - :page_facing_up: [footer.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/footer/footer.component.ts)
 
 ![footer](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/footer.png)
 
 :open_file_folder: [Login](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/login)
 
 - :page_facing_up: [login.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/login/login.component.html)
 
 - :page_facing_up: [login.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/login/login.component.ts)
 
 ![login](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/login.png)
 
 :open_file_folder: [Navi](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/navi)
 
 - :page_facing_up: [navi.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/navi/navi.component.html)
 
 - :page_facing_up: [navi.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/navi/navi.component.ts)
 
 ![option](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/options.png)
 
 :open_file_folder: [Payment](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/payment)
 
 - :page_facing_up: [payment.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/payment/payment.component.html)
 
 - :page_facing_up: [payment.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/payment/payment.component.ts)
 
 ![payment](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/payment.png)
 
 :open_file_folder: [Register](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/register)
 
 - :page_facing_up: [register.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/register/register.component.html)
 
 - :page_facing_up: [register.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/register/register.component.ts)
 
 ![register](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/register.png)
 
 :open_file_folder: [RentalDetail](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/rental-detail)
 
 - :page_facing_up: [rental-detail.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental-detail/rental-detail.component.html)
 
 - :page_facing_up: [rental-detail.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental-detail/rental-detail.component.ts)
 
 :open_file_folder: [Rental](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/rental)
 
 - :page_facing_up: [rental.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental/rental.component.html)
 
 - :page_facing_up: [rental.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental/rental.component.ts)
 
 ![rental](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/rental.png)
 
 :open_file_folder: [UserOrganize](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/user-organize)
 
 - :page_facing_up: [user-organize.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/user-organize/user-organize.component.html)
 
 - :page_facing_up: [user-organize.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/user-organize/user-organize.component.ts)
 
 ![user](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/user.png)
 
 ![usersettings](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/usersettings.png)
 
 ## Pipes ##
 
Pipes klasörümüzle, sayfamızda gösterdiğimiz datalara filtreler oluşturabiliyoruz.
Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.

:open_file_folder: [Pipes](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/pipes)

:pushpin:Alt kısımdaki filter-brand.pipe dosyamız araç listemizde bulanan marka kısmına göre, text kutumuza girilen karakterlere uygun sonuçların listelenmesini sağlar.
 
 - :page_facing_up: [FilterBrandPipe](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/pipes/filter-brand-pipe.pipe.ts)
 
![brandfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/brandFilter2.png)
 
:pushpin:Alt kısımdaki filter-color.pipe dosyamız araç listemizde bulanan renk kısmına göre, text kutumuza girilen karakterlere uygun sonuçların listelenmesini sağlar.
 
 - :page_facing_up: [FilterColorPipe](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/pipes/filter-color-pipe.pipe.ts)
 
![colorfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/ColorFilter2.png)

:pushpin:Alt kısımdaki filter-pipe.pipe dosyamız araç listemizde bulanan araçları marka ve modele göre, text kutumuza girilen karakterlere uygun sonuçların listelenmesini sağlar.
 
 - :page_facing_up: [FilterPipe](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/pipes/filter-pipe.pipe.ts)
 
![carfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/filter.png)
 
## Guards ##

Login guard kritik işlemleri yapmadan önce giriş yapıp yapmadığımızı denetler.Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.
 
 :open_file_folder: [Guards](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/guards)
 
 - :page_facing_up: [LoginGuard](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/guards/login.guard.ts)
 
## Interceptors ##

Aşağıdaki bağlantıları kullanarak detayları inceleyebilirsiniz.
 
 :open_file_folder: [Interceptors](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/interceptors)
 
 - :page_facing_up:[AuthInterceptors](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/interceptors/auth.interceptor.ts)
 
 ### :pushpin:***LinkedIn hesabıma [buradan](https://www.linkedin.com/in/ahmet-hilmi-%C3%A7ilo%C4%9Flu-884012203/) ulaşabilirsiniz.*** ###
 
 ### :e-mail:***E-mail: hlmclgl@gmail.com*** ###
 
 # Araç Sepeti.com 
 
 ## English Description ##
  
![Anasayfa 1](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars.png)

![Anasayfa 2](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars2.png)

Araç Sepeti is a car rental project that belongs to the C# programming language, adhering to SOLID principles and with an N-layer architecture structure; it is still under development. Currently, you are studying the front-end part of the project, created using Angular technology.

:link: ***You can arrive at the back-end of the project [from here](https://github.com/hlmclgl/RentaCarProject)***

:package:**Modules integrated into the project(node_modules)**
  
  - :pushpin:Bootstrap
  
  - :pushpin:Jquery
  
  - :pushpin:ngx-toastr
  
 In the front-end section, which we create using Angular, we have the models, Services,Components, Pipes, Guards and Interceptors folders. Let's look at these folders closely:
 
 ## Models ##
 
 The typescript files under this folder correspond to the objects in the Entities folder in the backend of RentaCarProject. This folder is created to organize data from the Back-end and sent from the Front-end. You can arrive at the Back-end layer part in the portion entities [from here](https://github.com/hlmclgl/RentaCarProject/tree/master/Entities).
 
:open_file_folder: [Models](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/models)
  
  - :page_facing_up:[Brand](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/brand.ts)
  
  - :page_facing_up:[CarDetail](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/carDetail.ts)
  
  - :page_facing_up:[Color](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/color.ts)
  
  - :page_facing_up:[CreditCard](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/creditCard.ts)
  
  - :page_facing_up:[Customer](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/customer.ts)
  
  - :page_facing_up:[CarImage](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/image.ts)
  
  - :page_facing_up:[ListResponseModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/listResponseModel.ts)
  
  - :page_facing_up:[LoginModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/loginModel.ts)
  
  - :page_facing_up:[Payment](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/payment.ts)
  
  - :page_facing_up:[RegisterModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/registerModel.ts)
  
  - :page_facing_up:[Rental](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/rental.ts)
  
  - :page_facing_up:[RentalDetail](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/rentalDetail.ts)
  
  - :page_facing_up:[ResponseModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/responseModel.ts)
  
  - :page_facing_up:[SingleResponseModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/singleResponseModel.ts)
  
  - :page_facing_up:[TokenModel](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/tokenModel.ts)
  
  - :page_facing_up:[User](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/models/user.ts)
  
## Services ##

Our files under the Services folder allow us to make a request to the WebAPI part, which is also at the back-end. WebAPI transmits the received request to the operations located in our back-end section. Each typescript file corresponds to a Controller in the WebAPI. You can arrive at the Back-end WebAPI section [from here](https://github.com/hlmclgl/RentaCarProject/tree/master/WebAPI).You can access the details of the Services folder by using the links below.
  
:open_file_folder:[Services](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/services)
   
  - :page_facing_up:[AuthService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/auth.service.ts)
  
  - :page_facing_up:[BrandService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/brand.service.ts)
  
  - :page_facing_up:[CarService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/car.service.ts)
  
  - :page_facing_up:[ColorService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/color.service.ts)
  
  - :page_facing_up:[CreditCardService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/credit-card.service.ts)
  
  - :page_facing_up:[CustomerService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/customer.service.ts)
  
  - :page_facing_up:[CarImageService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/image.service.ts)
  
  - :page_facing_up:[LocalStorageService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/local-storage.service.ts)
  
  - :page_facing_up:[PaymentService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/payment.service.ts)
  
  - :page_facing_up:[RentalService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/rental.service.ts)
  
  - :page_facing_up:[UserService](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/services/user.service.ts)
  
  ## Components ##
  
  According to the results of the operation from our Back-end section, the part where we edit how these results should be transmitted to the end user is our files under this folder. You can review the details using the links below.
  
  :open_file_folder: [Components](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components)
  
  :open_file_folder: [Brand](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/brand)
  
  - :page_facing_up:[brand.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/brand/brand.component.html)
  
  - :page_facing_up:[brand.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/brand/brand.component.ts)
  
 :open_file_folder: [CarAdd](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car-add)
 
 - :page_facing_up: [car-add.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-add/car-add.component.html)
 
 - :page_facing_up: [car-add.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-add/car-add.component.ts)
 
 ![araç ekleme](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/caradd.png)
 
  :open_file_folder: [CarFilter](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car-filter)
 
 - :page_facing_up: [car-filter.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-filter/car-filter.component.html)
 
 - :page_facing_up: [car-filter.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-filter/car-filter.component.ts)
 
 ![Carfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/filter.png)
 
 :open_file_folder: [CarUpdate](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car-update)
 
 - :page_facing_up: [car-update.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-update/car-update.component.html)
 
 - :page_facing_up: [car-update.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car-update/car-update.component.ts)

 ![update](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/update.png)
 
 :open_file_folder: [Cars](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/car)
 
 - :page_facing_up: [car.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car/car.component.html)
 
 - :page_facing_up: [car.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/car/car.component.ts)
 
 ![cars1](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars.png)
 
 ![cars2](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/cars2.png)
 
 :open_file_folder: [CarDetail](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/cardetail)
 
 - :page_facing_up: [cardetail.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/cardetail/cardetail.component.html)
 
 - :page_facing_up: [cardetail.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/cardetail/cardetail.component.ts)
 
 ![detail](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/carDetail.png)
 
  :open_file_folder: [Color](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/color)
 
 - :page_facing_up: [color.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/color/color.component.html)
 
 - :page_facing_up: [color.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/color/color.component.ts)
 
 :open_file_folder: [Customer](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/customer)
 
 - :page_facing_up: [customer.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/customer/customer.component.html)
 
 - :page_facing_up: [customer.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/customer/customer.component.ts)
 
 ![customer](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/customers.png)
 
 :open_file_folder: [Footer](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/footer)
 
 - :page_facing_up: [footer.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/footer/footer.component.html)
 
 - :page_facing_up: [footer.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/footer/footer.component.ts)
 
 ![footer](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/footer.png)
 
 :open_file_folder: [Login](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/login)
 
 - :page_facing_up: [login.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/login/login.component.html)
 
 - :page_facing_up: [login.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/login/login.component.ts)
 
![login](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/login.png)
 
 :open_file_folder: [Navi](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/navi)
 
 - :page_facing_up: [navi.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/navi/navi.component.html)
 
 - :page_facing_up: [navi.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/navi/navi.component.ts)
 
 ![option](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/options.png)
 
 :open_file_folder: [Payment](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/payment)
 
 - :page_facing_up: [payment.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/payment/payment.component.html)
 
 - :page_facing_up: [payment.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/payment/payment.component.ts)
 
 ![payment](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/payment.png)
 
 :open_file_folder: [Register](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/register)
 
 - :page_facing_up: [register.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/register/register.component.html)
 
 - :page_facing_up: [register.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/register/register.component.ts)
 
 ![register](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/register.png)
 
 :open_file_folder: [RentalDetail](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/rental-detail)
 
 - :page_facing_up: [rental-detail.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental-detail/rental-detail.component.html)
 
 - :page_facing_up: [rental-detail.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental-detail/rental-detail.component.ts)
 
 :open_file_folder: [Rental](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/rental)
 
 - :page_facing_up: [rental.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental/rental.component.html)
 
 - :page_facing_up: [rental.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/rental/rental.component.ts)
 
 ![rental](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/rental.png)
 
 :open_file_folder: [UserOrganize](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/components/user-organize)
 
 - :page_facing_up: [user-organize.component.html](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/user-organize/user-organize.component.html)
 
 - :page_facing_up: [user-organize.component.ts](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/components/user-organize/user-organize.component.ts)
 
 ![user](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/user.png)
 
 ![usersettings](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/usersettings.png)
 
 ## Pipes ##
 
With our Pipes folder, we can create filters for the data we show on our page.
You can review the details using the links below.

:open_file_folder: [Pipes](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/pipes)

:pushpin:Filter-brand at the bottom.our pipe file allows you to list the results that match the characters entered in our text box according to the brand section found in our tool list.
 
 - :page_facing_up: [FilterBrandPipe](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/pipes/filter-brand-pipe.pipe.ts)
 
![brandfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/brandFilter2.png)
 
:pushpin:Filter-color at the bottom.our pipe file allows you to list the results that match the characters entered in our text box according to the color section found in our tool list.
 
 - :page_facing_up: [FilterColorPipe](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/pipes/filter-color-pipe.pipe.ts)
 
![colorfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/ColorFilter2.png)

:pushpin:Filter-pipe at the bottom.our pipe file allows you to list the tools found in our tool list according to the brand and model, the results corresponding to the characters entered in our text box.
 
 - :page_facing_up: [FilterPipe](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/pipes/filter-pipe.pipe.ts)
 
![carfilter](https://raw.githubusercontent.com/hlmclgl/Rental-front-end/main/images/filter.png)
 
## Guards ##

Login guard checks whether we are logged in before performing critical operations.You can review the details using the links below.
 
 :open_file_folder: [Guards](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/guards)
 
 - :page_facing_up: [LoginGuard](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/guards/login.guard.ts)
 
## Interceptors ##

You can review the details using the links below.
 
 :open_file_folder: [Interceptors](https://github.com/hlmclgl/Rental-front-end/tree/master/src/app/interceptors)
 
 - :page_facing_up:[AuthInterceptors](https://github.com/hlmclgl/Rental-front-end/blob/master/src/app/interceptors/auth.interceptor.ts)
 
### :pushpin:***You can access my LinkedIn account [from here](https://www.linkedin.com/in/ahmet-hilmi-%C3%A7ilo%C4%9Flu-884012203/).*** ###

### :e-mail:***E-mail: hlmclgl@gmail.com*** ###



 
 
  
  
  
  
  
  
  
