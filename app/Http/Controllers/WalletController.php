<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WalletController extends Controller
{
    public function UserWallets($id)
    {
        try {
            $user = User::findOrFail($id);
            if ($user) {
                return response()->json(['wallets' => $user->wallets], 200);
            } else {
                return response()->json(['error' => 'User not found'], 404);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if ($user) {

            $public_key = implode(',', $request->public_key);
            $private_key = implode(',', $request->private_key);

            $wallet = $user->wallets()->create([
                'name' => $request->name,
                'mnemonic' => $request->mnemonic,
                'address' => $request->address,
                'public_key' => $public_key,
                'private_key' => $private_key
            ]);
            return response()->json(['message' => 'Wallet created', 'wallet' => $wallet], 200);
        }
    }
}
