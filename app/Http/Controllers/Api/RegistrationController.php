<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Services\Api\UserService;

class RegistrationController extends Controller
{
    private UserService $userService;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function store(SignupRequest $request)
    {
        return $this->userService->signUp(collect($request->validated()));
    }
}
