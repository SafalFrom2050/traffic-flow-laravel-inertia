<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class RoadTripRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => [],
            'starting_point' => ['required', 'string'],

        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
