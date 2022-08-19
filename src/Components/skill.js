import php from '../assets/img/PHP-logo.png'
import javaS from '../assets/img/javascript.png'
import boostrap from '../assets/img/bootstrap.png'
import tailwind from '../assets/img/tailwind.png'
import c from '../assets/img/c.png'
import laravel from '../assets/img/laravel.png'
import mysql from '../assets/img/mysql.jpg'
import phpmyadmin from '../assets/img/PhpMyAdminpng.png'

export default function Skill(){

    return( 
        <div>
            <h1>Skills en Programación</h1>
                <div class=" container content-center">
                <img src={php} height={120} width={120}/>
                <img src={javaS} height={120} width={120}/>
                <img src={boostrap} height={120} width={120}/>
                <img src={tailwind} height={150} width={150}/>
                </div>
                <div class="container">
                <img src={phpmyadmin} height={120} width={170}/>
                <img src={c} height={120} width={120}/>
                <img src={laravel} height={120} width={120}/>
                <img src={mysql} height={120} width={200}/>
                </div>           
        </div>
    );
  }