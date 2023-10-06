<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/auth', [AuthController::class, 'index']);
Route::post('/auth/verify', [AuthController::class, 'verify']);
Route::post('/auth/resend', [AuthController::class, 'resend']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return User::all();
});
