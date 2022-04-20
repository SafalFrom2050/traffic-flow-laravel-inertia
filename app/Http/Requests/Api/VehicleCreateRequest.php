<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class VehicleCreateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "name" => ['required', 'string'],
            "road_trip_id" => ['required', 'exists:road_trips,id'],
            "vehicle_type.is_public" => ['nullable', 'boolean'],
            "vehicle_type.type" => ['string']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
