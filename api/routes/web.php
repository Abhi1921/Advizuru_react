<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('auth/social', [LoginController::class,'show'])->name('social.login');
Route::get('oauth/{driver}', [LoginController::class,'redirectToProvider'])->name('social.oauth');
Route::get('oauth/{driver}/callback', [LoginController::class,'handleProviderCallback'])->name('social.callback');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/patnerlist',[App\Http\Controllers\admin\AdminController::class,'index'])->name('patnerlist');
Route::get('/userskills',[App\Http\Controllers\admin\AdminController::class,'userskills'])->name('userskills');


