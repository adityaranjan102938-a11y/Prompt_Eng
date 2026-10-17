import unittest
from student_utils import calculate_average, is_passing, get_grade


class TestStudentUtils(unittest.TestCase):
    def test_average_of_three_marks(self):
        self.assertEqual(
            calculate_average([80, 90, 100]),
            90.0
        )

    # Add one test method per specification row.
    # Name each method after what it checks.


unittest.main(argv=[""], exit=False)
