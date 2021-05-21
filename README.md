# employees-crud-application
react+spring

### Функционал

---
* просмотр всех работников
* редактирование 
* удаление работника
* добавление работника

### Технологии

---
* JDK 11
* сервлет: Spring MVC
* доступ к данным: Spring Data JPA, Hibernate
* фронтэнд: react
* база данных: MySQL
* контейнер сервлетов: Apache Tomcat

### Запуск

---
* поднять базу данных MySQL
* запустить скрипты для создания user и заполнения базы данных employees-CRUD-app\init_scripts_for_database.sql
* если будет необходимо изменить user или название базы: настройки доступа к базе данных в файле src\main\resources\application.properties
* запуск приложения 
  * бэк: mvn spring-boot:run
  * фронт: cd frontend-employees-crud-app npm start
* URL: http://localhost:3000/employees
