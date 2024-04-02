<?php

use App\Http\Controllers\TodoList\TodoListController;
use Illuminate\Support\Facades\Route;

Route::get('/todolist', [TodoListController::class, 'index'])
    ->middleware('auth')
    ->name('todolist.get');

Route::post('/todolist/store', [TodoListController::class, 'store'])
    ->middleware('auth')
    ->name('todolist.store');
