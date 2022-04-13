<?php

namespace App\Http\Requests\Resource;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'fname' => ['bail', 'min:1', 'string'],
            'lname' => ['bail', 'min:1', 'string'],
            'phone' => ['bail', 'string', 'min:10'],
            'email' => ['bail', 'email'],
            'password' => ['exclude_if:password,null', 'string', 'min:4'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
