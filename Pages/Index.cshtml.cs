using Arch_Showcase.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arch_Showcase.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public List<int> Years { get; set; }
        public List<int> Months { get; set; }
        public string[] Cities { get; set; }

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public IActionResult OnGet()
        {
            var showcaseData = new ShowcaseData();
            Years = showcaseData.GetYears();
            Months = showcaseData.GetMonths();
            Cities = showcaseData.GetCities();
            return Page();
        }
    }
}
