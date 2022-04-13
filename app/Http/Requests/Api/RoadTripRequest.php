<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class RoadTripRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'starting_point' => ['sometimes', 'string'],
            'destination' => ['sometimes', 'string'],
            'vehicle_id' => ['nullable'],
            'user_id' => ['required', 'exists:users']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
