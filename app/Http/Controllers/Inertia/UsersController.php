<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resource\UserUpdateRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use App\Services\Web\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function back;

class UsersController extends Controller
{
    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $users = User::paginate()->all();

        return Inertia::render('User/UserManager', compact('users'));
    }

    public function create()
    {

    }

    public function store(SignupRequest $request)
    {
        $this->userService->createUser($request->validated());
        return back();
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $user = User::find($id);
        return Inertia::render('User/EditUser', compact('user'));
    }

    public function update(UserUpdateRequest $request, $id)
    {
        $this->userService->updateUser($request->validated(), $id);
        return back();
    }

    public function destroy($id)
    {
        User::destroy($id);
        return back();
    }
}
