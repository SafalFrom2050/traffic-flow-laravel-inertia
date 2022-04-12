<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class IncidentRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'incident_type_id' => ['required', 'exists:incident_types,id', 'numeric'],
            'user_id' => ['required', 'exists:users,id', 'numeric'],
            'name' => ['string', 'max:255'],
            'description' => ['nullable', 'max:1000'],
            'latitude' => ['string'],
            'longitude' => ['string'],
            'device_identifier' => ['required'],
            'severity' => ['integer']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
