using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arch_Showcase.Model
{
    public class ShowcaseData
    {
        public List<int> Years = new List<int>();
        public List<int> Months = new List<int>();
        public string[] Cities = { "Atlanta", "Boise", "Chicago", "Denver", "San Diego" };
        public ShowcaseData()
        {
            int y = 2020;
            while (y < 2023)
            {
                Years.Add(y);
                y++;
            }
            int m = 01;
            while (m < 13)
            {
                Months.Add(m);
                m++;
            }
        }

        public List<int> GetYears()
        {
            return Years;
        }

        public List<int> GetMonths()
        {
            return Months;
        }

        public string[] GetCities()
        {
            return Cities;
        }
    }
}
