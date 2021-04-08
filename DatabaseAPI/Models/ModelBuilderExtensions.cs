using Microsoft.EntityFrameworkCore;

namespace DatabaseAPI.Models
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Plant>().HasData(
                new Plant {Id = 1, Name = "Pothos"},
                new Plant {Id = 2, Name = "Aglaonema"},
                new Plant {Id = 3, Name = "Jade Plant"},
                new Plant {Id = 4, Name = "Asparagus Fern"},
                new Plant {Id = 5, Name = "Chinese Money Plant"});
        }
    }
}