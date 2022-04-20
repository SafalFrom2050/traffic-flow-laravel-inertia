<?php

namespace App\Services\Web;


use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UserService
{
    private string $imagePath = 'profile/images/';

    public function updateUser(array $request, string $id): bool
    {
        $user = User::find($id);
        if (array_key_exists('profile_image', $request) && $request['profile_image']) {
            $file = $request['profile_image'];
            $filename = date('YmdHis') . $file->getClientOriginalName();
            $file->move(storage_path('app/public/' . $this->imagePath), $filename);

            // Delete previous image
            if (Storage::exists(storage_path('app/public/' . $user->profile_image))) {
                Storage::delete(storage_path('app/public/' . $user->profile_image));
            }
            //replace the `profile_image` with path
            $request['profile_image'] = 'storage/' . ($this->imagePath . $filename);
        }

        return $user->update($request);
    }

    public function createUser(array $request)
    {
        if (array_key_exists('profile_image', $request) && $request['profile_image']) {
            $file = $request['profile_image'];
            $filename = date('YmdHis') . $file->getClientOriginalName();
            $file->move(storage_path('app/public/' . $this->imagePath), $filename);

            //replace the `profile_image` with path
            $request['profile_image'] = 'storage/' . ($this->imagePath . $filename);
        }

        return User::create($request);
    }

}
