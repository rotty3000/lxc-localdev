#!/usr/bin/env bash

set -e

export KUBECONFIG=$(k3d kubeconfig write lxc-localdev 2>/dev/null)
export TILT_HOST=0.0.0.0

$@