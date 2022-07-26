import mongoose from 'mongoose';
import 'dotenv/config';

const start = async () => {
    mongoose.connect(process.env.ATLAS_DATABASE_URI);
    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Stray' });
    await kitty.save()
}

// debugger and breakpoint
start().catch(err => {
    console.error(err);
}).finally(async () => {
    await mongoose.connection.close();
})