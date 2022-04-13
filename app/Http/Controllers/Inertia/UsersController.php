<?php

namespace App\Http\Controllers\Inertia;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resource\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function back;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::paginate()->all();

        return Inertia::render('User/UserManager', compact('users'));
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        $user = User::find($id);
        return Inertia::render('User/UserEdit', compact('user'));
    }

    public function update(UserUpdateRequest $request, $id)
    {
        User::whereId($id)->update($request->validated());

        return back();
    }

    public function destroy($id)
    {
        User::destroy($id);
        return back();
    }
}
