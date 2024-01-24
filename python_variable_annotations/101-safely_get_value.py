#!/usr/bin/env python3

"""
Defines 'safely_get_value' function that takes 3 arguments
and returns 'T' type variable or Any type variable
"""

from typing import Mapping, TypeVar, Union, Any, Optional

# Define a generic type variable T
T = TypeVar('T')

def safely_get_value(dct: Mapping, key: Union[Any], default: Optional[T] = None) -> Union[Any, T]:
    """
    Safely get a value from a dictionary.
    """
    if key in dct:
        return dct[key]
    else:
        return default

