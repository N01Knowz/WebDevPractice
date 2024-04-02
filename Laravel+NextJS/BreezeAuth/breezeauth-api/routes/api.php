<?php

use App\Http\Controllers\Auth\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', [UserController::class, 'store'])
    ->name('register');

require __DIR__ . '/auth.php';
require __DIR__ . '/todoList.php';
