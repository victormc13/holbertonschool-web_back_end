#!/usr/bin/env python3

"""
Defines 'zoom_array' function that receives a tuple and int
and returns a list type
"""

from typing import Tuple, List, Any


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """Returns a list"""
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


tuple_int = (12, 72, 91)

zoom_2x = zoom_array(tuple_int)

zoom_3x = zoom_array(tuple_int, 3)
