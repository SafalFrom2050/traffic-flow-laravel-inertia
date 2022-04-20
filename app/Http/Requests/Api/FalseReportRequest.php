<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class FalseReportRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'user_id' => ['required', 'exists:users,id'],
            'details' => ['nullable'],
            'incident_id' => ['required', 'exists:incidents,id']
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
