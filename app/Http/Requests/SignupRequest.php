<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'fname' => ['bail', 'required', 'min:1', 'string'],
            'lname' => ['bail', 'required', 'min:1', 'string'],
            'phone' => ['bail', 'string', 'min:10', 'unique:users'],
            'email' => ['bail', 'email', 'unique:users'],
            'password' => ['bail', 'string', 'min:4'],
            'device_name' => ['string']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
