<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class LocationDataRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'latitude' => ['required', 'string'],
            'longitude' => ['required', 'string'],
            'speed' => ['required', 'string'],
            'road_trip_id' => ['required', 'exists:road_trips,id'],
            'device_identifier' => ['required', 'string']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
