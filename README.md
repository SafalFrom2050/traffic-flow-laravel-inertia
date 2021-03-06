# Traffic Monitoring System Based on Crowdsourced Smartphone GPS Data

## Development environment setup
- From the project root directory,
    - Install Composer dependencies using the command `composer install`.
    - Install node dependencies with `npm install`.
- Duplicate *.env.example* file to *.env*. `cp .env.example .env`.
- Adjust database connection in `config/database.php` and `.env` file.
- Run migration and seed `php artisan migrate:refresh --seed`
- Generate encryption key `php artisan key:generate`
- Copy file `webpack.mix.js-sample` to `webpack.mix.js` and adjust properties if required.
- Run `npm run dev` for front end assets compilation.
- Run `php artisan serve` to start the local server.

Then the site should be accessible via browser in `http://locahost:8000/`.


## For testing
- Go to project root directory then,
    - run `vendor/bin/phpunit --no-coverage`
    - To run test with coverage report
        - First you need to enable xdebug in your server
        - Run `vendor/bin/phpunit`. It generates report in report dir in your project
        


### Screenshots

#### Web App

##### Monitor Live Traffic
![Monitor Live Traffic](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/screenshots/Web/monitor-traffic.jpeg)


| Dashboard | Monitor Live Incidents |
|--|--|
| ![Admin Dashboard](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/screenshots/Web/dashboard.jpeg) | ![Monitor Live Incidents](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/screenshots/Web/monitor-incidents.jpeg) |


| Monitor False Reports | Manage Incident Types |
|--|--|
| ![Monitor False Reports](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/screenshots/Web/false-reports.jpeg) | ![Manage Incidents Type](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/screenshots/Web/incidents-type.jpeg) |


#### Android App

|Monitor Incidents | Monitor Live Traffic |
|--|--|
| ![Monitor Live Incidents](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/screenshots/Android/275900287_393020592444098_8529507673915566602_n.png) | ![Monitor Live Traffic](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/screenshots/Android/278706467_740366900484412_6616045705518471571_n.png) |


#### UML Diagrams
##### Use Case Diagram
![UML Diagram](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/diagrams/Use%20Case%20Traffic%20Flow.png)


##### System Navigation Diagrams
###### Web App
![System Navigation Diagram for Web App](https://github.com/SafalFrom2050/traffic-flow-laravel-inertia/blob/main/diagrams/System%20Navigation/Admin%20System%20Navigation%20Diagram.drawio.png?raw=true)

###### Android App
![System Navigation Diagram for Android App](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/diagrams/System%20Navigation/Android%20System%20Navigation%20Diagram.drawio.png)


##### Sequence Diagrams
| | |
|--|--|
| ![Sequence Diagram to Report Traffic Incidents](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/diagrams/Activity%20Sequence/Report%20Traffic%20Incident.png) | ![Sequence Diagram for Viewing Traffic Heatmaps](https://raw.githubusercontent.com/SafalFrom2050/traffic-flow-laravel-inertia/main/diagrams/Activity%20Sequence/Traffic%20Flow%20Heatmap.png) |
|  |  |
