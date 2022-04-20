<?php

namespace App\Http\Requests\Resource;

use Illuminate\Foundation\Http\FormRequest;

class IncidentTypeCreateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [ 'required' ,'string'],
            'marker' => [ 'required', 'mimes:jpg,bmp,png'],
            'image' => ['required', 'mimes:jpg,bmp,png'],
            'default_severity' => ['required', 'digits_between:0,5']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
