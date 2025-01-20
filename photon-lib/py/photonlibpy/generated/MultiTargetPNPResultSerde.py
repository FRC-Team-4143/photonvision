#
# MIT License
#
# Copyright (c) PhotonVision
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#

###############################################################################
## THIS FILE WAS AUTO-GENERATED BY ./photon-serde/generate_messages.py.
##                        --> DO NOT MODIFY <--
###############################################################################

from typing import TYPE_CHECKING

from ..packet import Packet
from ..targeting import *  # noqa

if TYPE_CHECKING:
    from ..targeting import MultiTargetPNPResult  # noqa
    from ..targeting import PnpResult  # noqa


class MultiTargetPNPResultSerde:
    # Message definition md5sum. See photon_packet.adoc for details
    MESSAGE_VERSION = "541096947e9f3ca2d3f425ff7b04aa7b"
    MESSAGE_FORMAT = "PnpResult:ae4d655c0a3104d88df4f5db144c1e86 estimatedPose;int16 fiducialIDsUsed[?];"

    @staticmethod
    def pack(value: "MultiTargetPNPResult") -> "Packet":
        ret = Packet()

        # estimatedPose is of non-intrinsic type PnpResult
        ret.encodeBytes(PnpResult.photonStruct.pack(value.estimatedPose).getData())

        # fiducialIDsUsed is a custom VLA!
        ret.encodeShortList(value.fiducialIDsUsed)
        return ret

    @staticmethod
    def unpack(packet: "Packet") -> "MultiTargetPNPResult":
        ret = MultiTargetPNPResult()

        # estimatedPose is of non-intrinsic type PnpResult
        ret.estimatedPose = PnpResult.photonStruct.unpack(packet)

        # fiducialIDsUsed is a custom VLA!
        ret.fiducialIDsUsed = packet.decodeShortList()

        return ret


# Hack ourselves into the base class
MultiTargetPNPResult.photonStruct = MultiTargetPNPResultSerde()
