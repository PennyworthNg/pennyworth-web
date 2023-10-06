<?php

namespace App\Http\Controllers;

use App\Mail\AuthenticationMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function index(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'email' => 'required|email',
            ]);


            $user = User::where('email', $validatedData['email'])->first();
            $pin = mt_rand(100000, 999999);


            if (!$user) {
                $user = User::create([
                    'email' => $validatedData['email'],
                    'token' => $pin,

                ]);
            } else {
                $user->update([
                    'token' => $pin,
                    'verified' => false
                ]);
            }

            $mailData = [
                'title' => 'Verify Your Email Address',
                'body' => 'Please copy the verification code below to verify Email Address',
                'pin' => $pin
            ];

            Mail::to($user->email)->send(new AuthenticationMail($mailData));

            return response()->json(['user' => $user], 200);
        } catch (ValidationException $e) {

            return response()->json(['error' => $e->validator->getMessageBag()], 422);
        } catch (\Exception $e) {

            return response()->json(['error' => $e], 500);
        }
    }

    public function verify(Request $request)
    {
        $verifiedData = $request->validate([
            'email' => 'required|email',
            'token' => 'required|numeric'
        ], ['email.required' => 'Email is required', 'token.required' => 'Token is required']);

        $user = User::where('email', $verifiedData['email'])->first();
        if ($user) {
            if ($user->token === $verifiedData['token']) {
                $user->update(['verified' => true]);
                $authToken = $user->createToken('api-token')->plainTextToken;
                return response()->json(['token' => $authToken, 'message' => 'Email verified successfully', 'user' => $user], 200);
            } else {
                return response()->json(['error' => 'Invalid token'], 422);
            }
        } else {
            return response()->json(['error' => 'Invalid email'], 422);
        }
    }

    public function resend(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
        ], ['email.required' => 'Email is required']);

        $user = User::where('email', $validatedData['email'])->first();
        $pin = mt_rand(100000, 999999);

        if ($user) {
            $user->update(['token' => $pin, 'verified' => 'false']);
            $mailData = [
                'title' => 'Verify Your Email Address',
                'body' => 'Please copy the verification code below to verify Email Address',
                'pin' => $pin
            ];

            Mail::to($user->email)->send(new AuthenticationMail($mailData));
            return response()->json(['message' => 'Email sent successfully', 'user' => $user], 200);
        } else {
            return response()->json(['message' => 'Invalid email'], 422);
        }
    }

    public function logOut(Request $request)
    {
        $request->user()->tokens()->delete();
    }
}
