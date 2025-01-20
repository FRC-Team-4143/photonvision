/*
 * MIT License
 *
 * Copyright (c) PhotonVision
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

#pragma once

// THIS FILE WAS AUTO-GENERATED BY ./photon-serde/generate_messages.py. DO NOT MODIFY

#include <wpi/SymbolExports.h>

// Include myself
#include "photon/dataflow/structures/Packet.h"
#include "photon/targeting/PhotonTrackedTarget.h"

// Includes for dependant types
#include "photon/targeting/TargetCorner.h"
#include <frc/geometry/Transform3d.h>
#include <stdint.h>
#include <vector>


namespace photon {

template <>
struct WPILIB_DLLEXPORT SerdeType<PhotonTrackedTarget> {
  static constexpr std::string_view GetSchemaHash() {
    return "cc6dbb5c5c1e0fa808108019b20863f1";
  }

  static constexpr std::string_view GetSchema() {
    return "float64 yaw;float64 pitch;float64 area;float64 skew;int32 fiducialId;int32 objDetectId;float32 objDetectConf;Transform3d bestCameraToTarget;Transform3d altCameraToTarget;float64 poseAmbiguity;TargetCorner:16f6ac0dedc8eaccb951f4895d9e18b6 minAreaRectCorners[?];TargetCorner:16f6ac0dedc8eaccb951f4895d9e18b6 detectedCorners[?];";
  }

  static photon::PhotonTrackedTarget Unpack(photon::Packet& packet);
  static void Pack(photon::Packet& packet, const photon::PhotonTrackedTarget& value);
};

static_assert(photon::PhotonStructSerializable<photon::PhotonTrackedTarget>);

} // namespace photon
