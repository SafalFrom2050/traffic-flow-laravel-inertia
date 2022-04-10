<?php

namespace App\Services\Api;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\PersonalAccessToken;

class UserService
{

    public function signUp($request)
    {
        $user = User::create([
            'fname' => $request->get('fname'),
            'lname' => $request->get('lname'),
            'phone' => $request->get('phone'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);

        event(new Registered($user));

        return $this->makeToken($user, $request->get('device_name'));
    }

    public function signIn($request)
    {
        $user = User::where('email', $request->get('email'))->first();

        if (! $user) {
            throw ValidationException::withMessages([
                'email' => ['No user found with this email.'],
            ]);
        }

        if (! Hash::check($request->get('password'), $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['Password is incorrect.'],
            ]);
        }

        return $this->makeToken($user, $request->get('device_name'));
    }

    public function signOut($request): ?bool
    {
        $token = PersonalAccessToken::findToken($request->get('token'));
        return $token->delete();
    }

    private function makeToken($user, $device_name): array
    {
        $response['user'] = $user;
        $response['access_token'] = $user->createToken($device_name)->plainTextToken;
        return $response;
    }
}
