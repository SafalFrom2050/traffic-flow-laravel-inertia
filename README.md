# Traffic Monitoring System Based on Crowdsourced Smartphone GPS Data  .

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
        
