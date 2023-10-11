<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\WalletController;
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

Route::prefix('user')->group(function () {
    Route::get('/{id}/wallets', [WalletController::class, 'UserWallets']);
    Route::get('/{user}/wallets/{wallet}', [WalletController::class, 'UserWallet']);
    Route::post('/{id}/wallet/create', [WalletController::class, 'create']);
    Route::post('/{id}/wallet/{wallet}/gen-pub-key', [WalletController::class, 'generatePubKey']);
    Route::get('/{id}/wallet/show/{wallet}', [WalletController::class, 'UserWallets']);
    Route::post('/{id}/wallet/update/{wallet}', [WalletController::class, 'UserWallets']);
    Route::delete('/{id}/wallet/delete/{wallet}', [WalletController::class, 'UserWallets']);
});


/* Route::middleware(['auth:sanctum'])->prefix('user')->group(function () {
    Route::get('/{id}/wallets', [WalletController::class, 'UserWallets']);
    Route::post('/{id}/wallet/create', [WalletController::class, 'create']);
    Route::get('/{id}/wallet/show/{wallet}', [WalletController::class, 'UserWallets']);
    Route::post('/{id}/wallet/update/{wallet}', [WalletController::class, 'UserWallets']);
    Route::delete('/{id}/wallet/delete/{wallet}', [WalletController::class, 'UserWallets']);
}); */
