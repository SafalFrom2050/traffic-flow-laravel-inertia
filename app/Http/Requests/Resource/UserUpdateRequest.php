<?php

namespace App\Http\Requests\Resource;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'profile_image' => ['exclude_if:profile_image,null', 'mimes:jpg,bmp,png'],
            'fname' => ['min:1', 'string'],
            'lname' => ['min:1', 'string'],
            'phone' => [ 'string', 'min:10'],
            'email' => [ 'email'],
            'password' => ['exclude_if:password,null', 'string', 'min:4'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
