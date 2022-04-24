<?php

namespace Tests\Unit;

use App\Models\User;
use App\Services\Api\UserService;
use Tests\TestCase;

class UserTest extends TestCase
{
    private UserService $userService;

    public function test_signup()
    {
        $this->userService = new UserService();

        $result = $this->userService->signUp(collect(
            [
                'email' => 'testt@email.com',
                'password' => 'password',
                'device_name' => 'test',
                'phone' => 8979327923,
                'fname' => 'Tom',
                'lname' => 'Test Lastname'
            ]));

        $this->assertTrue(!!$result);
    }

    public function test_signin()
    {
        $this->userService = new UserService();

        $user = User::first();
        $result = $this->userService->signIn(collect(['email' => $user->email, 'password' => 'password', 'device_name' => 'test']));

        $this->assertTrue(!!$result);
    }
}
