using Microsoft.EntityFrameworkCore;
using PovilasASPNetWEB.API.Models;

namespace PovilasASPNetWEB.API.Data
{

    public class MyAppContext : DbContext
    {
        public MyAppContext(DbContextOptions<MyAppContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
