<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Image\IndexController;
use App\Http\Controllers\Image\UploadController;



Route::get('/', function () {
    return view('welcome');
});
Route::get('/image',\App\Http\Controllers\Image\IndexController::class)->name('image.index');
Route::post('/image/upload',\App\Http\Controllers\Image\UploadController::class)->name('image.upload');