<?php

namespace App\Http\Requests\Resource;

use Illuminate\Foundation\Http\FormRequest;

class IncidentTypeUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => [ 'sometimes' ,'string'],
            'marker' => [ 'nullable', 'mimes:jpg,bmp,png'],
            'image' => ['nullable', 'mimes:jpg,bmp,png'],
            'default_severity' => ['sometimes', 'digits_between:0,5']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
