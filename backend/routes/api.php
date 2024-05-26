<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;




Route::controller(UserController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});
Route::post('create_post', [PostController::class, 'create_post']);
Route::post('create_comment', [CommentController::class, 'create_comment']);

Route::get('get_comments/{id}', [CommentController::class, 'get_comments']);
