using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebAPI.Models
{
    class DonationCandidate
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string fullName { get; set; }
        [Column(TypeName = "nvarchar(16)")]
        public string phone { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }
        public int age { get; set; }
        [Column(TypeName = "nvarchar(100")]
        public string bloodType { get; set; }
        [Column(TypeName = "nvarchar(100")]
        public string address { get; set; }

    }
}
