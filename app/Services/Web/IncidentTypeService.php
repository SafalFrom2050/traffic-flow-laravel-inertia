<?php

namespace App\Services\Web;

use App\Models\IncidentType;
use Illuminate\Support\Facades\File;

class IncidentTypeService
{
    private string $markerPath = 'public/images/incidents/markers';
    private string $imagePath = 'public/images/incidents/images';

    public function updateIncidentType(array $request, string $id)
    {
        $data = [
            'name' => $request['name'],
            'default_severity' => $request['default_severity']
        ];
        $incident = IncidentType::find($id);
        if ($request['image']) {
            $file = $request['image'];
            $filename = date('YmdHis') . $file->getClientOriginalName();
            $file->move(public_path($this->imagePath), $filename);
            $data['image'] = $this->imagePath . '/' . $filename;

            // Delete previous image
            if (File::exists(public_path($incident->image))) {
                File::delete(public_path($incident->image));
            }
        }

        if ($request['marker']) {
            $file = $request['marker'];
            $filename = date('YmdHis') . $file->getClientOriginalName();
            $file->move(public_path($this->markerPath), $filename);
            $data['marker'] = $this->markerPath . '/' . $filename;

            // Delete previous image
            if (File::exists(($incident->marker))) {
                File::delete(public_path($incident->marker));
            }
        }
        $incident->update($data);
    }

    public function createIncidentType(array $request)
    {
        $data = [
            'name' => $request['name'],
            'default_severity' => $request['default_severity']
        ];
        if ($request['image']) {
            $file = $request['image'];
            $filename = date('YmdHis') . $file->getClientOriginalName();
            $file->move(public_path($this->imagePath), $filename);
            $data['image'] = $this->imagePath . '/' . $filename;

        }

        if ($request['marker']) {
            $file = $request['marker'];
            $filename = date('YmdHis') . $file->getClientOriginalName();
            $file->move(public_path($this->markerPath), $filename);
            $data['marker'] = $this->markerPath . '/' . $filename;

        }

        return IncidentType::create($data);
    }
}
