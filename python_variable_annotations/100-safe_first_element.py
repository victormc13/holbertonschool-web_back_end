#!/usr/bin/env python3

"""
Defines the 'safe_first_element' function that returns
first element of 'lst' argument if is not None
"""

from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """
    Get the first element of the sequence if it exists,
    otherwise return None
    """
    if lst:
        return lst[0]
    else:
        return None
