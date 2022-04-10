<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\LogoutRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Services\Api\UserService;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthenticationController extends Controller
{
    private UserService $userService;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }


    public function store(LoginRequest $request)
    {
        return $this->userService->signIn(collect($request->validated()));
    }

    public function destroy(LogoutRequest $request)
    {
        return $this->userService->signOut(collect($request->validated()));
    }
}
